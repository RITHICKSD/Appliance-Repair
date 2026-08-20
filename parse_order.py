import re
with open('index.html', 'r') as f:
    html = f.read()

start = html.find('<!-- Right CTAs (Desktop) -->')
end = html.find('<!-- Mobile Actions (lg:hidden) -->', start)
cta_block = html[start:end]
print(cta_block)
