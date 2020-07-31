var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3
    },
    "map": {
        "debug": true,
        "cacheTag": "1596153764",
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "path": "day",
            "name": "Daytime Render",
            "world": "world",
            "imgextension": "png",
            "defaultZoom": 1,
            "base": "",
            "north_direction": 0,
            "showlocationmarker": true,
            "minZoom": 0,
            "last_rendertime": 1596153379,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8
        }
    ]
};
