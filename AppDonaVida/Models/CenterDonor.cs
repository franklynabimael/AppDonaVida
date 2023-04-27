using Microsoft.Build.Framework;

namespace AppDonaVida.Models;

public class CenterDonor
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Addres { get; set; }
    [Required]
    public string Province  { get; set; }
    [Required]
    public string Phone { get; set; }
    public ICollection<Quote> QuotesCenter { get; set; }
    public ICollection<DonationRecord> DonationsRecord{ get; set; }

}
