using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace guess_app_desktop
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Press [1] to guess my number, press [2] to choice one (think in a number from 0-100), press [3] to exit");
            var gameType = Console.ReadLine();
            if (gameType == "1")
            {
                new GuessGame().StartGame();
            }
            else if (gameType == "2")
            {
                new ChoiceGame().StartGame();
            }

            if (gameType != "3")
            {
                Main(args);
            }
            
        }
    }
}
