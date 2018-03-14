using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BreadPickerApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Bread")]
    public class BreadController : Controller
    {
		[HttpGet("[action]")]
		public ICollection<string> GetFavoriteBreads()
		{
			return new List<string>() { "Fruit bread", "Sweet bread", "Yeast Bread"};
		}
			
    }
}