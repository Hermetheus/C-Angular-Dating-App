using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers {

    //POST http://localhost:5000/api
    [Route ("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase {
        private readonly DataContext _context;
        public ValuesController (DataContext context) {
            _context = context;

        }

        // Get api/values
        [HttpGet]
        public async Task<IActionResult> GetValues () {
            var values = await _context.Values.ToListAsync ();

            return Ok (values);
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetValue (int id) {
            var value = await _context.Values.FirstOrDefaultAsync (value => value.Id == id);
            return Ok (value);
        }
    }
}