import java.util.*;
public class Program3
{
    public static void guesstheNumber()
    {
        Scanner sc = new Scanner(System.in);
        try
        {
            System.out.println("Enter any number: ");
            int number = 1 + (int)(100 + Math.random());
            int k = 5;
            int guess, i;
            System.out.println("A number is chosen"
                                + " between 1 to 100."
                                + " Guess the number"
                                + " within 5 trails");
            for(i=0;i<k;i++)
            {
                System.out.println("Guess the number: ");
                guess = sc.nextInt();
                if(number == guess)
                {
                    System.out.println("Congratulations! " + "You guessed the number");
                    break;
                }
                else if(number>guess && i!=k-1)
                {
                    System.out.println("The number is " + "greatest than " + guess);
                }
                else if(number<guess && i!=k-1)
                {
                    System.out.println("The number is " + "less than " + guess);
                }
            }
            if(i==k)
            {
                System.out.println("You have exhausted " + "K trials");
                System.out.println("The number was: " + number);
            }
        }
        finally
        {
            sc.close();
        }
    }
    public static void main(String args[])
    {
        guesstheNumber();
    }
}