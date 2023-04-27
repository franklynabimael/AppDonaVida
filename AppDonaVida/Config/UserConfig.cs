using AppDonaVida.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppDonaVida.Config;

public class UserConfig : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.Quotes)
            .WithOne(x => x.QuotesUser)
            .HasForeignKey(x => x.IdUser);
        builder.HasMany(x => x.DonationRecords)
            .WithOne(x => x.UserRecord)
            .HasForeignKey(x => x.IdUser);
    }
}
