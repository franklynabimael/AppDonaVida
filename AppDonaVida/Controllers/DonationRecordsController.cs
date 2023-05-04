using AppDonaVida.Models;
using AppDonaVida.ViewModels.Response;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using System.Drawing;
using System.Net;
using System.Security.Claims;

namespace AppDonaVida.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DonationRecordsController : ControllerBase
{
    private readonly ADVContext _context;
    public DonationRecordsController(ADVContext context) { _context = context; }

    [HttpGet]
    [Authorize]
    public IActionResult GetDonationsRecord()
    {
        IEnumerable<DonationRecord> donationRecords = _context.DonationRecords.ToList();
        IEnumerable<DonationRecordResponse> donationRecordResponses = donationRecords.Adapt<IEnumerable<DonationRecordResponse>>();
        return Ok(donationRecordResponses);
    }

    [HttpGet("{donationRecordId:int}")]
    public IActionResult IdDonationRecord( int donationRecordId)
    {
        var donationRecord= _context.DonationRecords.Find(donationRecordId);
        if (donationRecord == null)
        {
            throw new Exception($"No se encontró el registro de donación con Id {donationRecordId}");
        }
        var donationRecordResponse = donationRecord.Adapt<DonationRecordResponse>();


        return Ok(donationRecordResponse);
    }


    // Crear un get, y que este endpoint tenga un Authorize.

    [HttpGet("recordUser")]
    [Authorize]
    public IActionResult getRecordUser() {

        string? currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (currentUserId == null)
        {
            return StatusCode((int)HttpStatusCode.Unauthorized);
        }
        IEnumerable<DonationRecord> records = _context.DonationRecords.Where(d => d.IdUser == currentUserId).ToList();
        if (!records.Any()) 
        {
            return Ok();
        }
        IEnumerable<DonationRecordResponse> recordsResponse = records.Adapt<IEnumerable<DonationRecordResponse>>();
        return Ok(recordsResponse);
    }
}
