using Microsoft.AspNetCore.Mvc;

namespace AppDonaVida.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
