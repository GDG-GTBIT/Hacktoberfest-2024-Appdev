import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class Homescreen extends StatefulWidget {
  const Homescreen({super.key});

  @override
  State<Homescreen> createState() => _HomescreenState();
}

class _HomescreenState extends State<Homescreen> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    if (index == 1) {
      context.go('/settings'); // Navigate to the settings page
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
        title: const Text('Weather App'),
        foregroundColor: Theme.of(context).brightness == Brightness.light
            ? Colors.black
            : Colors.white,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.vertical(bottom: Radius.circular(16))),
        elevation: 0,
        backgroundColor: Colors.transparent,
      ),
      body: Stack(
        children: <Widget>[
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage("lib/assets/bg.png"),
                fit: BoxFit.fill,
              ),
            ),
            child: Stack(
              children: <Widget>[
                Align(
                  alignment: const Alignment(0, -0.95),
                  child: Card(
                    elevation: 15,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    child: SizedBox(
                      width: 400,
                      height: 50,
                      child: TextFormField(
                        cursorHeight: 25,
                        decoration: InputDecoration(
                          labelText: "Search for a city",
                          labelStyle: const TextStyle(
                              color: Color.fromARGB(0, 0, 0, 0)),
                          border: InputBorder.none,
                          floatingLabelBehavior: FloatingLabelBehavior.never,
                          contentPadding: const EdgeInsets.only(bottom: 20),
                          prefixIcon: IconButton(
                            icon: const Icon(Icons.search),
                            color: Colors.grey,
                            onPressed: () {},
                          ),
                          suffixIcon: IconButton(
                            icon: const Icon(Icons.sunny),
                            onPressed: () {},
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      top: 0.0), // Adjust this value to move the grid lower
                  child: WeatherGrid(),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class WeatherGrid extends StatelessWidget {
  final List<Map<String, dynamic>> weatherData = [
    {'name': 'Temperature', 'icon': Icons.wb_sunny},
    {'name': 'Humidity', 'icon': Icons.cloud},
    {'name': 'AQI', 'icon': Icons.air},
    {'name': 'Wind Speed', 'icon': Icons.speed},
  ];

  WeatherGrid({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: GridView.builder(
        shrinkWrap: true,
        padding: const EdgeInsets.all(10.0),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 1.0,
          crossAxisSpacing: 5.0,
          mainAxisSpacing: 5.0,
        ),
        itemCount: weatherData.length,
        itemBuilder: (BuildContext context, int index) {
          return Container(
            decoration: BoxDecoration(
              color: const Color.fromRGBO(223, 218, 218, 0.274),
              borderRadius: BorderRadius.circular(15.0), // Rounded corners
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(weatherData[index]['icon'],
                    size: 50.0, color: Colors.white),
                const SizedBox(height: 5.0),
                Text(
                  weatherData[index]['name'],
                  style: const TextStyle(color: Colors.white, fontSize: 15.0),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
