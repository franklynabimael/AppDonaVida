using AppDonaVida.JwtFeatures;
using AppDonaVida.Models;
using AppDonaVida.ViewModels;
using AppDonaVida.ViewModels.Response;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;

namespace AppDonaVida.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly ADVContext _context;
    private readonly UserManager<User> _userManager;
    private readonly JwtHandler _jwtHandler;
    public UsersController(ADVContext context, UserManager<User> userManager, JwtHandler jwtHandler)
    {
        _context =context;
        _userManager = userManager;
        _jwtHandler = jwtHandler;
    }

    [HttpGet]
    [Authorize]
    public IActionResult GetUsers()
    {
        IEnumerable<User> users = _context.Users.ToList();
        IEnumerable<UserResponse> user = users.Adapt<IEnumerable<UserResponse>>();
        return Ok(user);
    }

    [HttpPost("register")]
    public async Task<IActionResult> CreateUser(RegisterDto registerDto)
    {
        var user = registerDto.Adapt<User>();
        var result = await _userManager.CreateAsync(user, registerDto.Password);
        if (!result.Succeeded)
            throw new Exception("Incorrect credentials");
        await _userManager.AddToRoleAsync(user, "User");
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPost("loging")]
    public async Task<ActionResult<LogingResponse>> Loging(LogingDto logingDto)
    {
        var user = await _userManager.FindByNameAsync(logingDto.UserName);
        if (user == null || !await _userManager.CheckPasswordAsync(user, logingDto.Password))
            return Unauthorized(new { message = "Username or password incorrect" });
        var signingCredentials = _jwtHandler.GetSigningCredentials();
        var claims = await _jwtHandler.GetClaims(user);
        var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
        string token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        return Ok(new LogingResponse { IsAuthSuccessful = true, Token = token });
    }
}
