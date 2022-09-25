import java.util.*;
public class Program1
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        try
        {
            System.out.println("Enter two numbers: ");
            int a = sc.nextInt();
            int b = sc.nextInt();
            int temp = a;
            a = b;
            b = temp;
            System.out.println("Swapped Values are: "+ a + b);
        }
        finally
        {
            sc.close();
        }
    }
}