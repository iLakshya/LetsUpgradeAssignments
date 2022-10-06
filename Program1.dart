import 'dart:io';

void main() {
  var name;
  print("What is your name?");
  name = stdin.readLineSync();
  print("Your age is: $name");
}
