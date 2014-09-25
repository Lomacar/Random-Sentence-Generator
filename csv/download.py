import urllib.request

#nouns
urllib.request.urlretrieve ("https://docs.google.com/spreadsheets/d/1FYbVHIMfwPJcYl_UgJFEQQ2zee4FkRzQMLWXhyz4qAI/export?format=csv&gid=1993487238", "nouns.csv")

#verbs
urllib.request.urlretrieve ("https://docs.google.com/spreadsheets/d/1FYbVHIMfwPJcYl_UgJFEQQ2zee4FkRzQMLWXhyz4qAI/export?format=csv&gid=1577968186", "verbs.csv")

#adjectives
urllib.request.urlretrieve ("https://docs.google.com/spreadsheets/d/1FYbVHIMfwPJcYl_UgJFEQQ2zee4FkRzQMLWXhyz4qAI/export?format=csv&gid=948204870", "adjectives.csv")
