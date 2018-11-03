using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace guess_app_desktop
{
    public abstract class Game
    {
        public int attemps { get; set; }
        public string typeGame { get; set; }

        public void Finish()
        {
            Console.WriteLine(string.Format("Game finished in {0} attemps", attemps.ToString()));
        }

        public int SelectRandomNumber(int min, int max)
        {
            Random randomNumber = new Random();
            return randomNumber.Next(min, max);
        }

        public abstract void StartGame();

        public abstract void Play();
    }
}
