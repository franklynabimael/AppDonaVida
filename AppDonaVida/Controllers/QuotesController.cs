using AppDonaVida.Models;
using AppDonaVida.ViewModels.Response;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppDonaVida.Controllers;


[Route("api/[controller]")]
[ApiController]
public class QuotesController : ControllerBase
{
    private readonly ADVContext _context;

    public QuotesController (ADVContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult GetQuotes()
    {
        IEnumerable<Quote> quotes = _context.Quotes.ToList();
        IEnumerable<UserResponse> quotesResponse = users.Adapt<IEnumerable<UserResponse>>();
        return Ok(quotesResponse);
    }
}
