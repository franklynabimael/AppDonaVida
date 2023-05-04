using System.ComponentModel.DataAnnotations;

namespace AppDonaVida.ViewModels;

public class RegisterDto
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public string LastName { get; set; }
    public string Password { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }
    public DateTime BirthDate { get; set; }
    public string PhoneNumber { get; set; }

}

