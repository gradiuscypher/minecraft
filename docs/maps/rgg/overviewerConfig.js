var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "path": "day",
            "last_rendertime": 1599180979,
            "bgcolor": "#1a1a1a",
            "base": "",
            "world": "world",
            "isOverlay": false,
            "maxZoom": 8,
            "imgextension": "png",
            "minZoom": 0,
            "north_direction": 0,
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599181372",
        "controls": {
            "spawn": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true
        }
    }
};
