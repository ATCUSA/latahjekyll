# Jekyll Serve
desc "Run jekyll serve with options."
task :serve do
  puts "Serving Jekyll on Port 8181 to 0.0.0.0"
  system "bundle exec jekyll s -P 8181 -H 0.0.0.0"
end

# Jekyll Serve Production
desc "Run jekyll serve with options in production."
task :pserve do
  puts "Serving Jekyll on Port 8181 to 0.0.0.0 in Production"
  system "JEKYLL_ENV=Production bundle exec jekyll serve -i -w -P 8181 -H 0.0.0.0"
end

# Clean Jekyll Cache
desc "Cleans Jekyll's cache. Used for troubleshooting."
task :clean do
  puts "Cleaning Jekyll Cache"
  system "bundle exec jekyll clean"
end

# Sync project folder to siab.
desc "Sync the project folder to siab."
task :sync2siab do
  puts "Starting Sync to SIAB."
  system "rsync -azvP ./ siab.tx-server.com:projects/latah/latahjekyll"
  puts "Files have been synced."
end
