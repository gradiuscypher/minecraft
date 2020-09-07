var overviewerConfig = {
    "map": {
        "cacheTag": "1599465770",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true
        },
        "north_direction": "lower-left"
    },
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "zoomLevels": 8,
            "poititle": "Markers",
            "north_direction": 0,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "base": "",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "last_rendertime": 1599465379,
            "isOverlay": false,
            "world": "world",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "path": "day"
        }
    ],
    "worlds": [
        "world"
    ]
};
