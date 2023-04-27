using AppDonaVida.Models.Helpers;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AppDonaVida.Models;

public class User:IdentityUser
{
    [Required]
    [Display(Name = "Nombre")]
    public string Name { get; set; }

    [Required]
    [Display(Name = "Apellido")]
    public string LastName { get; set; }

    [Required]
    [Display(Name = "Fecha de nacimiento")]
    public DateTime BirthDate { get; set; }

    [Required]
    [Display(Name = "Dirección")]
    public string Address { get; set; }

    [Required]
    [Display(Name = "Teléfono")]
    public string Phone { get; set; }

    [Required]
    [Display(Name = "Grupo sanguíneo")]
    public BloodGroup BloodGroup { get; set; }

    public ICollection<Quote> Quotes { get; set; }
    public ICollection<DonationRecord>DonationRecords { get; set; }


}
