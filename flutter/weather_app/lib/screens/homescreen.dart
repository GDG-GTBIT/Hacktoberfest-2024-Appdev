import 'package:flutter/material.dart';
import 'package:flutter_adaptive_scaffold/flutter_adaptive_scaffold.dart';

class Homescreen extends StatelessWidget {
  const Homescreen({super.key});

  @override
  Widget build(BuildContext context) {
    return AdaptiveScaffold(
      destinations: [
        NavigationDestination(icon: Icon(Icons.home), label: 'Home'),
        NavigationDestination(icon: Icon(Icons.settings), label: 'Settings')
      ], // Add appropriate destinations here if needed
      body: (context) => buildScaffold(),
    );
  }

  Widget buildScaffold() {
    return Scaffold(
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
                  alignment: const Alignment(0, -0.85),
                  child: Text(
                    'Weather App',
                    style: TextStyle(
                      shadows: const [
                        Shadow(
                          color: Color.fromARGB(48, 0, 0, 0), // Shadow color
                          blurRadius: 5.0, // Blur radius
                          offset: Offset(2.0, 2.0), // Offset for shadow
                        ),
                      ],
                      color: const Color.fromARGB(255, 255, 255, 255),
                      fontFamily: 'Sans',
                      fontSize: 33,
                      fontWeight: FontWeight.w400,
                      height: 3,
                    ),
                  ),
                ),
                Align(
                  alignment: const Alignment(0, -0.6),
                  child: Card(
                    elevation: 15,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    child: SizedBox(
                      width: 344,
                      height: 50,
                      child: TextFormField(
                        cursorHeight: 25,
                        decoration: InputDecoration(
                          labelText: "Search by book name",
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
                      top: 150.0), // Adjust this value to move the grid lower
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
    {'name': 'City 1', 'icon': Icons.wb_sunny},
    {'name': 'City 2', 'icon': Icons.cloud},
    {'name': 'City 3', 'icon': Icons.ac_unit},
    {'name': 'City 4', 'icon': Icons.water_drop_outlined},
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
