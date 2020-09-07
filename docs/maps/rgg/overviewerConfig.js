var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "defaultZoom": 1,
            "world": "world",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "last_rendertime": 1599501379,
            "showlocationmarker": true,
            "zoomLevels": 8,
            "isOverlay": false,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1599501771",
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "world"
    ]
};
