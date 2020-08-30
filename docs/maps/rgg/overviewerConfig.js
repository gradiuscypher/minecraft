var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1598799768"
    },
    "tilesets": [
        {
            "path": "day",
            "base": "",
            "minZoom": 0,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "world": "world",
            "maxZoom": 8,
            "isOverlay": false,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1598799379,
            "name": "Daytime Render"
        }
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    }
};
