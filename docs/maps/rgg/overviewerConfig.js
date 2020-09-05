var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599321772",
        "controls": {
            "mapType": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 8,
            "north_direction": 0,
            "path": "day",
            "world": "world",
            "last_rendertime": 1599321379,
            "zoomLevels": 8,
            "minZoom": 0,
            "name": "Daytime Render",
            "imgextension": "png",
            "defaultZoom": 1
        }
    ]
};
