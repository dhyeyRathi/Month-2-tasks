{homeServices.map(
              (services) =>
             
                  <div key={services?.id}>
                    <a className="group block" href="/services">
                      <div className="aspect-[3/4] image-zoom">
                        <img
                          alt="Venue Management"
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          src={services?.image}
                        />
                      </div>
                      <p className="eyebrow text-gold mt-6">04</p>
                      <h3 className="font-serif text-2xl mt-2 group-hover:text-gold transition-colors">
                        {services?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {services?.description}
                      </p>
                    </a>
                  </div>
                
            )}