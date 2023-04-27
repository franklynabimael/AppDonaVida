using AppDonaVida.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AppDonaVida;

public class ADVContext : IdentityDbContext<User>
{
    public const string DefaultSchema = "ADVDB";
    public ADVContext(DbContextOptions<ADVContext> options) : base(options)
    {
        Quotes = Set<Quote>();
        DonationRecords = Set<DonationRecord>();
        CenterDonors = Set<CenterDonor>();
    }

    public DbSet<Quote> Quotes { get; }
    public DbSet<DonationRecord> DonationRecords { get; }
    public DbSet<CenterDonor> CenterDonors { get; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ADVContext).Assembly);
        modelBuilder.HasDefaultSchema(DefaultSchema);
        modelBuilder.Entity<User>();

        base.OnModelCreating(modelBuilder);
    }
}
