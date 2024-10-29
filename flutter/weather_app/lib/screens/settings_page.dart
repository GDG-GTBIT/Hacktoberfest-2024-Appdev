import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:weather_app/main.dart';
import 'package:weather_app/screens/homescreen.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _SettingsPageState createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  bool isDarkMode = false;

  void toggleTheme(bool value) {
    setState(() {
      isDarkMode = value;
      if (isDarkMode) {
        // Change theme to dark
        MyApp.of(context).changeTheme(ThemeMode.dark);
      } else {
        // Change theme to light
        MyApp.of(context).changeTheme(ThemeMode.light);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
      ),
      body: Center(
        child: SwitchListTile(
          title: const Text('Dark Mode'),
          value: isDarkMode,
          onChanged: toggleTheme,
        ),
      ),
    );
  }
}

class MyApp extends InheritedWidget {
  MyApp({
    super.key,
    required super.child,
  });

  // ignore: library_private_types_in_public_api
  static _MyAppState of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<MyApp>()!._data;
  }

  final _MyAppState _data = _MyAppState();

  @override
  bool updateShouldNotify(MyApp oldWidget) => true;
}

class _MyAppState extends State<SettingsPage> {
  ThemeMode _themeMode = ThemeMode.system;

  void changeTheme(ThemeMode themeMode) {
    setState(() {
      _themeMode = themeMode;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Weather App',
      theme: ThemeData.light(), // Define light theme
      darkTheme: ThemeData.dark(), // Define dark theme
      themeMode: _themeMode, // Use themeMode from state
      routerConfig: GoRouter(routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => const Homescreen(),
        ),
        GoRoute(
          path: '/settings',
          builder: (context, state) => const SettingsPage(),
        ),
      ]),
    );
  }
}

void main() {
  runApp(MyApp(
    child: const WeatherApp(),
  ));
}
