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
    public class GuessGameTests
    {
        [TestMethod()]
        public void NumberToChoiceTest()
        {
            GuessGame game = new GuessGame();
            Assert.IsTrue(game.numberToChoice >= 0);
            Assert.IsTrue(game.numberToChoice <= 100);
        }

        [TestMethod()]
        public void VerifyNumberTest()
        {
            GuessGame game = new GuessGame();
            Assert.AreEqual(game.VerifyNumber(game.numberToChoice - 1), -1);
            Assert.AreEqual(game.VerifyNumber(game.numberToChoice + 1), 1);
            Assert.AreEqual(game.VerifyNumber(game.numberToChoice), 0);
        }
    }
}