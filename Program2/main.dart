import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'screens/screens.dart';

void main() {
  runApp(const MyApp());
}

void runApp(MyApp myApp) {
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context)
  {
    return GetMaterialApp(
      debugShowCheckedModeBanner : false,
      title: 'Flutter Demo';
      theme: ThemeData(testTheme: Theme.of(context).textTheme.apply(
        bodyColor: Colors.white,
        displayColor: Colors.white,
      )),
      home: const HomeScreen(),
      getPages:[
        GetPage(name: '/', page:()=>const HomeScreen()),
        GetPage(name: '/song', page:()=>const SongScreen()),
        GetPage(name: '/playlist', page:()=>const PlaylistScreen()),
      ],
    );
  }
}