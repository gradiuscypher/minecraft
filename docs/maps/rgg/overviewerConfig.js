var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "north_direction": 0,
            "last_rendertime": 1599400579,
            "base": "",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "minZoom": 0,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "poititle": "Markers",
            "defaultZoom": 1,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "cacheTag": "1599400971",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "overlays": true
        },
        "debug": true
    }
};
