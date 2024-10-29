import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:weather_app/screens/homescreen.dart';
import 'package:weather_app/screens/settings_page.dart';

void main() {
  runApp(const ThemeManager(child: WeatherApp()));
}

class ThemeManager extends StatefulWidget {
  final Widget child;
  const ThemeManager({super.key, required this.child});

  @override
  // ignore: library_private_types_in_public_api
  _ThemeManagerState createState() => _ThemeManagerState();

  // ignore: library_private_types_in_public_api
  static _ThemeManagerState of(BuildContext context) {
    final _ThemeManagerState? result =
        context.findAncestorStateOfType<_ThemeManagerState>();
    assert(result != null, 'No ThemeManager found in context');
    return result!;
  }
}

class _ThemeManagerState extends State<ThemeManager> {
  ThemeMode _themeMode = ThemeMode.system;

  void changeTheme(ThemeMode themeMode) {
    setState(() {
      _themeMode = themeMode;
    });
  }

  @override
  Widget build(BuildContext context) {
    return InheritedThemeManager(
      themeMode: _themeMode,
      changeTheme: changeTheme,
      child: widget.child,
    );
  }
}

class InheritedThemeManager extends InheritedWidget {
  final ThemeMode themeMode;
  final void Function(ThemeMode themeMode) changeTheme;

  const InheritedThemeManager({
    super.key,
    required super.child,
    required this.themeMode,
    required this.changeTheme,
  });

  @override
  bool updateShouldNotify(InheritedThemeManager oldWidget) =>
      themeMode != oldWidget.themeMode;

  static void Function(ThemeMode themeMode)? of(BuildContext context) {
    return context
        .dependOnInheritedWidgetOfExactType<InheritedThemeManager>()
        ?.changeTheme;
  }
}

class WeatherApp extends StatelessWidget {
  const WeatherApp({super.key});

  @override
  Widget build(BuildContext context) {
    final GoRouter router = GoRouter(
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => const Homescreen(),
        ),
        GoRoute(
          path: '/settings',
          builder: (context, state) => const SettingsPage(),
        ),
      ],
    );

    return MaterialApp.router(
      title: 'Weather App',
      theme: ThemeData.light(), // Define light theme
      darkTheme: ThemeData.dark(), // Define dark theme
      themeMode: ThemeMode.system, // Use the theme from ThemeManager
      routerConfig: router,
    );
  }
}
