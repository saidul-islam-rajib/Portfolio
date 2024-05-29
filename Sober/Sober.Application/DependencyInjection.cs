using Microsoft.Extensions.DependencyInjection;
using Sober.Application.Services.Authentication;

namespace Sober.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            return services;
        }
    }
}
