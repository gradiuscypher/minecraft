var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "imgextension": "png",
            "north_direction": 0,
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
            "showlocationmarker": true,
            "last_rendertime": 1597359379,
            "poititle": "Markers",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "maxZoom": 8,
            "zoomLevels": 8,
            "name": "Daytime Render",
            "base": "",
            "isOverlay": false,
            "minZoom": 0,
            "defaultZoom": 1
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1597359763"
    },
    "worlds": [
        "world"
    ]
};
