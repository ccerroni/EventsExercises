using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace guess_app_desktop
{
    public class ChoiceGame : Game
    {
        public int minRange { get; set; }
        public int maxRange { get; set; }
        public int selected { get; set; }

        public ChoiceGame()
        {
            this.minRange = 0;
            this.maxRange = 100;
            this.selected = SelectRandomNumber(this.minRange, this.maxRange);
        }

        public void IsSmaller()
        {
            this.maxRange = this.selected;
        }

        public void IsBigger()
        {
            this.minRange = this.selected;
        }

        public void IsEqual()
        {
            Finish();
        }

        public override void Play()
        {
            Console.WriteLine(string.Format("is it {0} ?", this.selected));
            var result = Console.ReadLine();
            while (result != "*")
            {
                this.attemps++;
                if (result == "-")
                {
                    this.IsSmaller();
                    this.selected = SelectRandomNumber(this.minRange, this.maxRange);
                    Console.WriteLine(string.Format("is it {0} ?", this.selected));
                    result = Console.ReadLine();
                }
                else if (result == "+")
                {
                    this.IsBigger();
                    this.selected = SelectRandomNumber(this.minRange, this.maxRange);
                    Console.WriteLine(string.Format("is it {0} ?", this.selected));
                    result = Console.ReadLine();
                }
                else
                {
                    Console.WriteLine("please enter [+]: is bigger, [-]:is smaller, [*]: is equal");
                    result = Console.ReadLine();
                }
            }

            Finish();

        }

        public override void StartGame()
        {
            Console.WriteLine("Please enter: ");
            Console.WriteLine("[+]: if your number is bigger");
            Console.WriteLine("[-]: if your number is smaller");
            Console.WriteLine("[*]: if your number is equal");
            Play();
        }
    }

}
