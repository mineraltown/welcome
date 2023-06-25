# 从世嘉官网爬取居民立绘和头像
# https://asia.sega.com/bokumono/welcome/cn/resident/

from pathlib import Path
import requests

# 要检查和创建的目录列表
directories = ["resident_3d", "resident_new", "resident_thumb"]

# 遍历目录列表
for d in directories:
    path = Path(d)
    if not path.exists():
        # 如果目录不存在，则创建它
        path.mkdir(parents=True)
        print(f"已创建目录：{d}")
    else:
        print(f"目录已存在：{d}")

    # 图片的基本URL和文件夹路径
    base_url = "https://asia.sega.com/bokumono/welcome/cn/assets/img/resident/"

    # 循环保存每个图片
    for i in range(1, 29):
        # 构建完整的图片URL
        image_url = f"{base_url}{d}{i:02d}.png"
        # 发送HTTP请求并获取图片内容
        response = requests.get(image_url)

        if response.status_code == 200:
            # 构建文件路径和文件名
            file_path = path / f"{d}{i:02d}.png"
            # 保存图片
            with open(file_path, "wb") as f:
                f.write(response.content)
                print(f"{d} - 已保存图片 {i}")
        else:
            print(f"{d} - 无法下载图片 {i}")
