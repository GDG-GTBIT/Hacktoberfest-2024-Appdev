import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:weather_app/screens/homescreen.dart';

void main() {
  runApp(const WeatherApp());
}

class WeatherApp extends StatelessWidget {
  const WeatherApp({super.key});

  @override
  Widget build(BuildContext context) {
    final GoRouter _router = GoRouter(
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => const Homescreen(),
        ),
      ],
    );

    return MaterialApp.router(
      title: 'Weather App',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: const Color.fromARGB(255, 18, 32, 47),
      ),
      routerConfig: _router,
    );
  }
}
