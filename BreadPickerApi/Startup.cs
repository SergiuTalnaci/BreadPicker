using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BreadPickerApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
		
			services.AddMvc();
			
			services.Configure<IISOptions>(x =>
			{
				x.AutomaticAuthentication = false;
				x.ForwardClientCertificate = false;
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseCors(policy =>
			{
				policy.WithOrigins(Configuration.GetValue<string>("AngularAppUrl"));
				policy.AllowAnyHeader();
				policy.AllowAnyMethod();
				policy.AllowCredentials();
			});

			app.UseStaticFiles();

			app.UseMvc();
		}
	}
}
