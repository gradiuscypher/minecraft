var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "world": "world",
            "zoomLevels": 8,
            "imgextension": "png",
            "showlocationmarker": true,
            "base": "",
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1599555379,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "minZoom": 0,
            "poititle": "Markers",
            "path": "day"
        }
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "pan": true,
            "overlays": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1599555767",
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
