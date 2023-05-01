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

    [HttpGet("{donationRecordId}")]
    public IActionResult IdDonationRecord( string donationRecordId)
    {
        var donationRecord= _context.DonationRecords.Find(donationRecordId);
        if (donationRecord == null)
        {
            throw new Exception($"No se encontró el registro de donación con Id {donationRecordId}");
        }
        var donationRecordResponse = donationRecord.Adapt<DonationRecordResponse>();


        return Ok(donationRecordResponse);
    }

    [HttpGet("{idUser}")]
    [Authorize]

    public IActionResult getRecordUser(Guid idUser) {

    string? currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (currentUserId == null)
        {
            return StatusCode((int)HttpStatusCode.Unauthorized);
        }

        var record =  _context.DonationRecords.Include(x => x.IdUser).FirstOrDefault(x => x.IdUser == currentUserId) ?? throw new ArgumentNullException(nameof(currentUserId), "No se encontro");

        if (record == null)
        {
          return record = DonationRecordResponse
        }




        return Ok();
  
    }



}
