using Microsoft.VisualStudio.TestTools.UnitTesting;
using guess_app_desktop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace guess_app_desktop.Tests
{
    [TestClass()]
    public class ChoiceGameTests
    {
  

        [TestMethod()]
        public void IsBiggerTest()
        {
            ChoiceGame game = new ChoiceGame();
            Assert.AreEqual(game.minRange, 0);
            game.IsBigger();
            Assert.IsTrue(game.minRange > 0);
        }

        [TestMethod()]
        public void IsSmallerTest()
        {
            ChoiceGame game = new ChoiceGame();
            Assert.AreEqual(game.maxRange, 100);
            game.IsSmaller();
            Assert.IsTrue(game.maxRange < 100);
        }

        [TestMethod()]
        public void SelectedNumberTest()
        {
            ChoiceGame game = new ChoiceGame();
            Assert.IsTrue(game.selected <= 100);
            Assert.IsTrue(game.selected >= 0);
        }
    }
}