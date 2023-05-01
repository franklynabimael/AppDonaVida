using AppDonaVida.Models;
using AppDonaVida.ViewModels.Response;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppDonaVida.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CentersDonorController : ControllerBase
{
    // declarar en una variable privada, de read only, el tipo de dato "La clase del contexto" y luego su nombre empezando con la rayita _.

    private readonly ADVContext _context;

    // el constructor, que es un publico, luego el nombre del controller entero, sigue un parentesis con el tipo de dato "LA clase del contexto otravez" y el nombre solo que sin la rayita, y buieno el resto te lo automclpeta XD
    public CentersDonorController (ADVContext context) { _context = context; }

    [HttpGet]
    [Authorize]
    public IActionResult CentersDonor()
    {
        // En una variable de tipo IEnumerable<"el models correspondiente">, vas a seleccionar la tabla correspondiente, y la operacion sera meterla en una lista.
        IEnumerable<CenterDonor> donors = _context.CenterDonors.ToList();
        // En una variable de tipo IEnumerable<"el response correspondiente">, vas a adaptar la variable "el models correspondiente" que literalmente habias hecho anteriormente, y lo adaptaras al tipo de dato que le pusiste at u variable de response.
        IEnumerable<CenterDonorResponse> centerDonorResponses = donors.Adapt<IEnumerable<CenterDonorResponse>>();
        // mete el response en el ok.
        return Ok(centerDonorResponses);
    }
}
