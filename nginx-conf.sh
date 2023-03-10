upstream npmserver {
 server localhost:3000;
}
server {
  server_name lpim.nacer.ma;
  proxy_read_timeout 720s;
  proxy_connect_timeout 720s;
  proxy_send_timeout 720s;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header X-Real-IP $remote_addr;


  access_log /var/log/nginx/lpim.access.log;
  error_log /var/log/nginx/lpim.error.log;

    proxy_buffers 16 64k;
    proxy_buffer_size 128k;
    client_max_body_size 1024M;
  location / {
    proxy_redirect off;
    proxy_pass http://npmserver;
    proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_redirect off;
        proxy_set_header    Host            $host;
        proxy_set_header    X-Real-IP       $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header    X-Forwarded-Proto http;
  }

  gzip_types text/css text/scss text/plain text/xml application/xml application/json application/javascript;
  gzip on;
    
    location /_next/webpack-hmr {
        proxy_pass http://localhost:3000/_next/webpack-hmr;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

}
