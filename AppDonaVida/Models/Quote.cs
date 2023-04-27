using Microsoft.Build.Framework;

namespace AppDonaVida.Models;

public class Quote
{
    public string Id { get; set; }
    [Required]
    public DateTime Date { get; set; }
    public string IdUser { get; set; }
    public User QuotesUser { get; set; }
    public string IdCenter { get; set; }
    public CenterDonor CenterDonor { get; set; }
}
