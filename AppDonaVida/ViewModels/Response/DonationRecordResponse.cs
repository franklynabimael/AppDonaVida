using AppDonaVida.Models;

namespace AppDonaVida.ViewModels.Response;

public class DonationRecordResponse

{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public float Quantity { get; set; }
    public string IdCenterDonation { get; set; }
    public string IdUser { get; set; }
  
}
