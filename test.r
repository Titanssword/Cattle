
dataset <- read.csv("red.csv")
#print(dataset[1])
first = dataset[1,]
y = data.matrix(first)
x = seq(1, length(first), by=1)
plot(x,y)
#print(is.na(first))
#matplot(first)
hist(y)

