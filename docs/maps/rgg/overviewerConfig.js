var overviewerConfig = {
    "map": {
        "cacheTag": "1599015769",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left"
    },
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    },
    "tilesets": [
        {
            "imgextension": "png",
            "path": "day",
            "world": "world",
            "maxZoom": 8,
            "name": "Daytime Render",
            "minZoom": 0,
            "isOverlay": false,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "base": "",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "last_rendertime": 1599015379,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8
        }
    ],
    "worlds": [
        "world"
    ]
};
