#include <stdio.h>
#include <stdlib.h>

int main(__attribute__((unused))int argc, char *argv[])
{
	int i = 0;

	while(argv[i])
	{
		printf("argv[%d]: %s\n", i, argv[i]);
		i++;
	}
	return 0;
}
