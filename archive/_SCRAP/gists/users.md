

wget -q -O - https://api.github.com/users/mnpenner/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget
