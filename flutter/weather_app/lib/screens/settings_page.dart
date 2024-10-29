import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _SettingsPageState createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    if (index == 0) {
      context.go('/');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _selectedIndex == 0 ? buildScaffold() : Container(),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
      ),
    );
  }

  Widget buildScaffold() {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
        foregroundColor: Theme.of(context).brightness == Brightness.light
            ? Colors.black
            : Colors.white,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(bottom: Radius.circular(16)),
        ),
        elevation: 0,
        backgroundColor: Colors.transparent,
      ),
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("lib/assets/bg.png"), // Path to your image
            fit: BoxFit.cover, // How the image should be fitted
          ),
        ),
        child: ListView(
          children: [
            ListTile(
              title: const Text('Enable Hourly Weather Alerts'),
              trailing: Switch(
                value: true,
                onChanged: (value) {},
                activeColor: const Color.fromARGB(
                    255, 203, 201, 201), // Change the active color
                activeTrackColor: const Color.fromARGB(255, 203, 201, 201)
                    .withOpacity(0.7), // Change the active track color
                inactiveThumbColor:
                    Colors.grey, // Change the inactive thumb color
                inactiveTrackColor: Colors.grey
                    .withOpacity(0.7), // Change the inactive track color
              ),
            ),
            ListTile(
              title: const Text('Temperature'),
              subtitle: DropdownButton<String>(
                value: 'Celsius',
                items: <String>['Celsius', 'Fahrenheit']
                    .map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                onChanged: (String? newValue) {
                  setState(() {});
                },
              ),
            ),
            ListTile(
              title: const Text('Wind Speed'),
              subtitle: DropdownButton<String>(
                value: 'Miles per hour',
                items: <String>['Kilometers per hour', 'Miles per hour']
                    .map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                onChanged: (String? newValue) {
                  setState(() {});
                },
              ),
            ),
            ListTile(
              title: const Text('Pressure'),
              subtitle: DropdownButton<String>(
                value: 'Millibars',
                items: <String>['Millibars', 'Inches of mercury']
                    .map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                onChanged: (String? newValue) {
                  setState(() {});
                },
              ),
            ),
            Container(
              alignment: Alignment.bottomCenter,
              padding: const EdgeInsets.all(16),
              child: const Text(
                'Powered by OpenWeatherMap API',
              ),
            ),
          ],
        ),
      ),
    );
  }
}
