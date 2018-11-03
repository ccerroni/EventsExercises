using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace guess_app_desktop
{
    public class GuessGame : Game
    {
        public int numberToChoice { get; set; }

        public GuessGame()
        {
            this.numberToChoice = SelectRandomNumber(0, 100);
        }

        public int VerifyNumber(int number)
        {
            var result = 0; // 1: bigger; -1: samller; 0: equal
            if (number > this.numberToChoice)
            {
                result = 1;
            }
            else if (number < this.numberToChoice)
            {
                result = -1;
            }
            return result;
        }

        public override void Play()
        {
            Console.WriteLine("I've chosen a number from 0-100 do you know what number is ?");
            var number = Convert.ToInt32(Console.ReadLine());
            attemps++;
            var result = VerifyNumber(number);
            while (result != 0)
            {
                attemps++;
                if (result > 0)
                {
                    Console.WriteLine("No, Try a smaller number: ");
                }
                else
                {
                    Console.WriteLine("No, Try a bigger number: ");
                }
                number = Convert.ToInt32(Console.ReadLine());
                result = VerifyNumber(number);
            }
            Finish();
        }

        public override void StartGame()
        {
            Console.WriteLine("Enter the number: ");
            Play();
        }
    }
}
