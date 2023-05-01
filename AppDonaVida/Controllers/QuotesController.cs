﻿using AppDonaVida.Models;
using AppDonaVida.ViewModels;
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

    public QuotesController(ADVContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult GetQuotes()
    {
        IEnumerable<Quote> quotes = _context.Quotes.ToList();
        IEnumerable<QuoteResponse> quotesResponse = quotes.Adapt<IEnumerable<QuoteResponse>>();
        return Ok(quotesResponse);
    }

    [HttpGet("{quoteId:string}")]
    [Authorize]
    public IActionResult AcceptQuote(string quoteId)
    {
        Quote quote = _context.Quotes.FirstOrDefault(x => x.Id == quoteId) ?? throw new Exception("No Se Encontro la Cita");
        quote.IsAproved = true;
        return Ok();
    }

    [HttpPost]
    [Authorize]
    public IActionResult CreateQuote(QuoteDTO quoteDTO) { 
        // En una nueva variable de tipo "el models correspondiente", adaptar el quoteDTO a al tipo de dato "el modelo correspondiente".
        Quote quote = quoteDTO.Adapt<Quote>();
        // Seleccionar la tabla, seleccionar Add, y a;adir esta variable que adaptamos.
        _context.Quotes.Add(quote);
        // El context, y la operacion de guardar cambios.
        _context.SaveChanges();
        // En una nueva variable de tipo "QuoteResponse", adaptar la variable de tipo "el modelo" al tipo de dato del Response.
        QuoteResponse quoteResponse = quote.Adapt<QuoteResponse>();
        // meter la variable de Quoteresponse en el return ok.
        return Ok(quoteResponse);
    }
}
