# tugas-week-8-rakamin

express js and dabase integration

## Documentation

1. restoring database
   [image](https://cdn.discordapp.com/attachments/724584754619613206/1213017226660151307/image.png?ex=65f3f153&is=65e17c53&hm=ac49f04ac7eee2719e629a089cd629852f0b04901c789329afc79d12a9c46b07&)

2. installing express js, pg
   [package depencies](https://cdn.discordapp.com/attachments/724584754619613206/1213400540684226600/image.png?ex=65f55650&is=65e2e150&hm=d1513a48884852d09c81b9b093d6937599966af6667e3766dfe83b91f8e7fb24&)

### introducing the homework

1.  melakukan seeding, memasukkan 5 data baru pada table actor

    - [seeding command](https://cdn.discordapp.com/attachments/724584754619613206/1213033240156307488/image.png?ex=65f4003d&is=65e18b3d&hm=d8f1ec80ffc9b472ca78c936bd6e8fa3f1a250115fd48febaf4147d850bc5c28&)
    - [result](https://cdn.discordapp.com/attachments/724584754619613206/1213033884669710366/image.png?ex=65f400d7&is=65e18bd7&hm=219b0c8e199c4f59e64aff543f211f49ebe2a216d35b98d00423da90c4ff25bd&)

2.  Buatlah query untuk menampilkan data pada database sebagai berikut.

    1. Menampilkan data seluruh list ﬁlm
       - query [image](https://cdn.discordapp.com/attachments/724584754619613206/1213406898628337704/image.png?ex=65f55c3c&is=65e2e73c&hm=2dd811f6f094cca6aed6281d5f06663c62c5130229f60d734e5555f3ac287969&)
       - result [image](https://cdn.discordapp.com/attachments/724584754619613206/1213407451609702420/image.png?ex=65f55cc0&is=65e2e7c0&hm=2471b8e19b447a339d4334aa01f1e7d98d03f4503f2824ea2e42c570ca6d824d&)
    2. Menampilkan data ﬁlm tertentu berdasarkan id
       -insomnia get [image](https://cdn.discordapp.com/attachments/724584754619613206/1213407904560979988/image.png?ex=65f55d2c&is=65e2e82c&hm=b2c2683db87990fbeb3dd6c7f6de2e049cdbdc09fa4737281360d8efd7eadf23&)
       -result id 2 [image](https://cdn.discordapp.com/attachments/724584754619613206/1213408017060466738/image.png?ex=65f55d47&is=65e2e847&hm=4d6d8089bf8bf1e2e9fbb48d27bbeaa4e2d8740b13a4c657cf5bb2e0c80029d4&)
    3. Menampilkan data list category
       -query [image](https://cdn.discordapp.com/attachments/724584754619613206/1213408584910639135/image.png?ex=65f55dce&is=65e2e8ce&hm=572eddac7ae181b0d3df1835fb39e74a2f627ffd519772bfc63bba24ef337653&)
       -result [image](https://cdn.discordapp.com/attachments/724584754619613206/1213408695405514752/image.png?ex=65f55de9&is=65e2e8e9&hm=3f8836afdd3e067d496a8c81a19b4806cc4c5bb79f7e93b4b1bab6079e434bac&)
    4. Menampilkan data list ﬁlm berdasarkan category
       -query [image](https://cdn.discordapp.com/attachments/724584754619613206/1213408836757622814/image.png?ex=65f55e0a&is=65e2e90a&hm=de754cfd0c32ee073b846bc5f6c26a11e3b828f16a1f4430ce1bf76ca507b802&)
       -result daftar film dengan category id 2 [image](https://cdn.discordapp.com/attachments/724584754619613206/1213408988327059498/image.png?ex=65f55e2e&is=65e2e92e&hm=6111cd12a755712ea50f4d517671f14f6b99f5edc4a85dc376404036d65ef2f6&)

3.  Lakukan migrasi database dengan menambahkan column age pada tabel actor yang tersedia.

    -[query](https://cdn.discordapp.com/attachments/724584754619613206/1213410008994418778/image.png?ex=65f55f22&is=65e2ea22&hm=6b0921b228fc95a695a968b061b191520a40487061cf4f46b4614343070a1756&)

    -[result](https://cdn.discordapp.com/attachments/724584754619613206/1213409913221677076/image.png?ex=65f55f0b&is=65e2ea0b&hm=ef9d7e516d14e31f20357af24eac8dd01fd4fd07b7365dcde32b462c779287e3&)
