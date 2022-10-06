import 'dart:html';

import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinerGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Colors.deepPurple.shade800.withOpacity(0.8),
            Colors.deepPurple.shade200.withOpacity(0.8),
          ],
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: const _CustomAppBar(),
        bottomNavigationBar: const _CustomNavBar(),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInserts.all(20.0),
                child: Column(
                  childern: [
                    Text(
                      'Enjoy your favourite music',
                      style: Theme.of(context)
                          .textTheme
                          .headline6!
                          .copyWith(fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Enjoy your favourite music',
                      style: Theme.of(context)
                          .textTheme
                          .headline6!
                          .copyWith(fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _CustomNavBar extends StatelessWidget {
  const _CustomNavBar({
    Key? key,
  }) : super(key: key);
}

class _CustomAppBar extends StatelessWidget with PreferredSizeWidget {
  const _CustomAppBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      leading: const Icon(Icons.grid_view_rounded),
      actions: [
        Container(
          margin: const EdgeInserts.only(right: 20),
          child: const CircleAvatar(
            backgroundImage:
                NetworkImage('https://unsplash.com/photos/h_qQ4RFsC9g'),
          ),
        ),
      ],
    );
  }
}
